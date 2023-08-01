import {
    p as e,
    b as t
} from "./p-37eadf7b.js";
(() => {
    const t =
        import.meta.url,
        a = {};
    return "" !== t && (a.resourcesUrl = new URL(".", t).href), e(a)
})().then((e => t([
    ["p-bcc695d9", [
        [1, "nk-dropkit", {
            apikey: [1],
            dev: [4],
            multiple: [4],
            walletText: [1, "wallet-text"],
            mintText: [1, "mint-text"],
            soldOutText: [1, "sold-out-text"],
            loading: [32],
            dropStarted: [32],
            selectValue: [32],
            msg: [32],
            mint: [64],
            initDrop: [64]
        }],
        [1, "nk-supply", {
            apikey: [1],
            dev: [4],
            loading: [32],
            msg: [32]
        }],
        [1, "nk-success-message"],
        [1, "nk-wallet-button", {
            disabled: [4],
            loading: [4]
        }],
        [1, "nk-error-message"],
        [1, "nk-mint-button", {
            disabled: [4],
            loading: [4],
            maxPerMint: [2, "max-per-mint"],
            selectedValue: [2, "selected-value"],
            placeholder: [1]
        }],
        [1, "nk-sold-out"],
        [1, "nk-loading"]
    ]],
    ["p-00da4cc5", [
        [1, "nk-winter-checkout", {
            apikey: [1],
            dev: [4],
            projectId: [1, "project-id"],
            presaleConnect: [4, "presale-connect"],
            walletAddress: [1, "wallet-address"],
            email: [1],
            mintQuantity: [1, "mint-quantity"],
            erc1155Video: [1, "erc-1-1-5-5-video"],
            projectTitle: [1, "project-title"],
            brandImage: [1, "brand-image"],
            mintText: [1, "mint-text"],
            isOpen: [32],
            loading: [32],
            msg: [32],
            extraMintParams: [32],
            priceFunctionParams: [32],
            disabled: [32],
            presale: [32],
            openModal: [64]
        }]
    ]]
], e)));