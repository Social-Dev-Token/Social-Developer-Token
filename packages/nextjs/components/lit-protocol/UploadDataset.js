import { Lit, client } from "../utils/LitProtocol.js";

function UploadDataset() {
    let state = {
        encryptedFile: null,
        encryptedSymmetricKey: null,
        authSigs: [],
    };

    const chain = "mumbai";

    const accessControlConditions = [{
        contractAddress: "0x77F9Cc01794280758C184E95924a3Dd6707316e4",
        standardContractType: "ERC1155",
        chain,
        method: "balanceOf",
        parameters: [":userAddress", "4"],
        returnValueTest: {
            comparator: ">=",
            value: "0",
        },
    }, ];

    /** Send Metadata to NFT.storage
     * Data to send:
     * - name
     * - description
     * - image
     *
     * Returns:
     * - metadata URI
     */
    async function uploadDatasetTokenMetadata() {}

    /** Call "createDatasetToken" function on Dataset Tokens contract
     * Data to send:
     * - price
     * - expiry time
     * - metadata URI
     *
     * Emits:
     * - event CreateDatasetToken
     */
    async function createDatasetToken() {}

    async function encryptFile(file) {
        console.log("__encrypting:");
        try {
            const authSig = await Lit.checkAndSignAuthMessage({
                chain,
            });

            state = {...state, authSigs: [...state.authSigs, authSig] };

            console.log({ authSig });

            const { encryptedFile, symmetricKey } = await Lit.encryptFile({ file });

            const encryptedSymmetricKey = await client.saveEncryptionKey({
                accessControlConditions,
                symmetricKey,
                authSig,
                chain,
            });

            state = {
                ...state,
                encryptedFile,
                encryptedSymmetricKey: Lit.uint8arrayToString(encryptedSymmetricKey, "base16"),
            };
        } catch (error) {
            console.log(error);
            console.log(error.message);
        }
    }

    async function decryptFile(file, encryptedSymmetricKey) {
        console.log("___decrypting");
        try {
            const authSig = await Lit.checkAndSignAuthMessage({
                chain,
            });

            state = {...state, authSigs: [...state.authSigs, authSig] };

            console.log({ authSig });

            const decryptionSymmetricKey = await client.getEncryptionKey({
                accessControlConditions,
                toDecrypt: encryptedSymmetricKey,
                chain,
                authSig,
            });

            const decryptedFileAsBuffer = await Lit.decryptFile({
                file,
                symmetricKey: decryptionSymmetricKey,
            });

            const filename = "dataset.md";

            const decryptedFile = new File([decryptedFileAsBuffer], filename, {
                type: "text/markdown",
            });

            console.log("decryptedFile", decryptedFile);

            const url = URL.createObjectURL(decryptedFile);
            console.log("____url:", url);

            const linkEl = document.createElement("a");
            linkEl.href = url;
            linkEl.download = filename;
            linkEl.innerText = "___Download___";

            document.body.appendChild(linkEl);
        } catch (error) {
            console.log(error);
            console.log(error.message);
        }
    }

    function render() {
        const formEl = document.createElement("form");

        const id = "dataset-file";

        const labelEl = document.createElement("label");
        labelEl.htmlFor = id;
        labelEl.innerText = "Upload MY File:";

        const inputEl = document.createElement("input");
        inputEl.type = "file";
        inputEl.id = id;
        inputEl.name = id;

        inputEl.addEventListener("change", async(event) => {
            if (event.target.files[0]) {
                const file = event.target.files[0];

                await encryptFile(file);

                await decryptFile(state.encryptedFile, state.encryptedSymmetricKey);

                console.log("___state", state);
            }
        });

        formEl.appendChild(labelEl);
        formEl.appendChild(inputEl);

        document.body.appendChild(formEl);
    }

    async function main() {
        render();
    }

    main();
}

export default UploadDataset;