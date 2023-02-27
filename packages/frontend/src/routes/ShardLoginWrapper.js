import { getLocation } from 'connected-react-router';
import { parse } from 'query-string';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ConfirmShardLoginWrapper from '../components/login/v2/ConfirmShardLoginWrapper';
import InvalidContractId from '../components/login/v2/InvalidContractId';
import SelectAccountLoginWrapper from '../components/login/v2/SelectAccountLoginWrapper';
import CONFIG from '../config';
import { Mixpanel } from '../mixpanel/index';
import {
    selectAccountLocalStorageAccountId
} from '../redux/slices/account';
import { isUrlNotJavascriptProtocol } from '../utils/helper-api';

export const LOGIN_ACCESS_TYPES = {
    FULL_ACCESS: 'fullAccess',
    LIMITED_ACCESS: 'limitedAccess'
};

const ShardLoginWrapper = () => {

    console.log('SHARD_LOGIN_WRAPPER');
    const [confirmLogin, setConfirmLogin] = useState(false);

    const location = useSelector(getLocation);
    const URLParams = parse(location.search);
    console.log('SHARD_LOGIN', URLParams);
    const contractId = URLParams.contract_id;
    const publicKey = URLParams.public_key;
    const failureUrl = URLParams.failure_url;
    const successUrl = URLParams.success_url;
    const invalidContractId = URLParams.invalidContractId;

    // TODO: Add shardId to the URL
    const contractIdUrl = `${CONFIG.EXPLORER_URL}/accounts/${contractId}`;

    const accountLocalStorageAccountId = useSelector(selectAccountLocalStorageAccountId);

    let requestingFullAccess = !contractId || (publicKey && contractId?.endsWith(`.${CONFIG.LOCKUP_ACCOUNT_ID_SUFFIX}`)) || contractId === accountLocalStorageAccountId;
    const requestAccountIdOnly = !publicKey && !contractId;
    if (requestAccountIdOnly) {
        requestingFullAccess = false;
    }
    const loginAccessType = requestingFullAccess ? LOGIN_ACCESS_TYPES.FULL_ACCESS : LOGIN_ACCESS_TYPES.LIMITED_ACCESS;

    if (invalidContractId) {
        return (
            <InvalidContractId
                invalidContractId={contractId}
                onClickReturnToApp={() => {
                    Mixpanel.track('LOGIN Invalid contract id Click return to app button', { contract_id: contractId });
                    if (isUrlNotJavascriptProtocol(failureUrl)) {
                        window.location.href = failureUrl;
                    }
                }}
            />
        );
    }

    if (confirmLogin) {
        console.log('confirmLogin', 'SHARD');
        return (
            <ConfirmShardLoginWrapper
                loginAccessType={loginAccessType}
                contractId={contractId}
                contractIdUrl={contractIdUrl}
                onClickCancel={() => setConfirmLogin(false)}
                publicKey={publicKey}
                successUrl={successUrl}
            />
        );
    }

    return (
        <SelectAccountLoginWrapper
            loginAccessType={loginAccessType}
            contractId={contractId}
            contractIdUrl={contractIdUrl}
            failureUrl={failureUrl}
            successUrl={successUrl}
            onClickNext={() => {
                setConfirmLogin(true);
                window.scrollTo(0, 0);
            }}
        />
    );
};

export default ShardLoginWrapper;
