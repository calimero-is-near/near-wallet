import React from 'react';
import { useSelector } from 'react-redux';
import { selectAccountUrlPrivateShardRpc } from '../../../redux/slices/account';

import { selectSignTransactions } from '../../../redux/slices/sign';
import SignTransactionDetails from './SignTransactionDetails';

export default ({
    onClickGoBack,
    signGasFee
}) => {
    const transactions = useSelector(selectSignTransactions);
    const isPrivateShard = !!useSelector(selectAccountUrlPrivateShardRpc);
    return (
        <SignTransactionDetails
            onClickGoBack={onClickGoBack}
            transactions={transactions}
            signGasFee={signGasFee}
            isPrivateShard={isPrivateShard}
        />
    );
};
