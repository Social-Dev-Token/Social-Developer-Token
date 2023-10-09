import { DatasetTokens } from "../utils/Ethers.js"

function DatasetList() {
  let state = {
    tokens: [],
  }

  async function getDatasetTokens() {
    try {
      const filter = await DatasetTokens.filters.CreateDatasetToken()

      const events = await DatasetTokens.queryFilter(filter)

      const tokens = events.map((event) => {
        const { id, price, expiryTime, uri, provider } = event.args

        return {
          id: id.toNumber(),
          price: price.toNumber(),
          expiryTime: expiryTime.toNumber(),
          uri,
          provider,
        }
      })

      console.log({ tokens })
    } catch (error) {
      console.log({ error })
    }

    /*
    Use the nonce to find out all IDs and a loop for data retrieval

    try {
      const nonce = await DatasetTokens.nonce()

      const numOfTokens = nonce.toNumber()

      const tokens = []

      for (let id = 1; id <= numOfTokens; id++) {
        const price = await DatasetTokens.datasetTokenPrices(id)
        const expiryTime = await DatasetTokens.datasetTokenExpiryTimes(id)
        const uri = await DatasetTokens.datasetTokenURIs(id)

        tokens.push({
          id,
          price: price.toNumber(),
          expiryTime: expiryTime.toNumber(),
          uri,
        })
      }

      console.log({ tokens })

      return tokens
    } catch (error) {
      console.log({ error })
    }
    */
  }

  function render() {
    console.log("Render List")
  }

  async function main() {
    const tokens = await getDatasetTokens()

    state = { ...state, tokens }

    console.log({ state })

    render()
  }

  main()
}

export default DatasetList
