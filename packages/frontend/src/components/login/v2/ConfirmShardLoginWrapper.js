import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Mixpanel } from '../../../mixpanel/index';
import { allowLogin, allowShardLogin } from '../../../redux/actions/account';
import {
    selectAccountLocalStorageAccountId,
    selectAccountUrlReferrer
} from '../../../redux/slices/account';
import { isUrlNotJavascriptProtocol } from '../../../utils/helper-api';
import ConfirmLogin from './ConfirmLogin';

export default ({
    loginAccessType,
    contractId,
    contractIdUrl,
    onClickCancel,
    publicKey,
    successUrl
}) => {
    const dispatch = useDispatch();
    console.log('CONFIRM SHARD_LOGIN_WRAPPER', successUrl);
    const accountLocalStorageAccountId = useSelector(selectAccountLocalStorageAccountId);
    const accountUrlReferrer = useSelector(selectAccountUrlReferrer);
    const successUrlIsValid = isUrlNotJavascriptProtocol(successUrl);

    return (
        <ConfirmLogin
            signedInAccountId={accountLocalStorageAccountId}
            loginAccessType={loginAccessType}
            appReferrer={accountUrlReferrer}
            publicKey={publicKey}
            contractId={contractId}
            onClickCancel={onClickCancel}
            onClickConnect={() => Mixpanel.withTracking('LOGIN', () => dispatch(allowLogin()))}
            contractIdUrl={contractIdUrl}
            successUrlIsValid={successUrlIsValid}
        />
    );
};
