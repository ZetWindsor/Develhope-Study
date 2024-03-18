import { Constatns } from "./Constants"
import Card from "./components/Card"
import ErrorAllert from "./components/ErrorAllert"
import { useAxios } from "./hook/useAxios"

const App = () => {
  const { data: quotes, error: quotesError, refetch: refetchQuotes, setData: setQuotes } = useAxios(`${Constatns.API_URL}/quotes`, { selector: 'quotes' })

  const handleDelete = (quoteId) => {
    setQuotes((quotes) => {
      return quotes.filter(quotes => quotes.id != quoteId)
    })
  }

  const handleReload = () => {
    refetchQuotes()
  }


  if (quotesError) {
    return (
      <>
        <ErrorAllert>
          {quotesError}
        </ErrorAllert>
      </>
    )

  }

  return (
    <>
      <div>
        <button onClick={handleReload}>reload Data</button>
      </div>
      <div className="flex justify-center">
        <div className="w-full flex flex-wrap gap-8 p-12">
          {
            quotes && quotes.length > 0 && quotes.map((quote) => (
              <Card key={quote.id} data={quote} onDelete={handleDelete} />
            ))
          }

        </div>
      </div>
    </>
  )
}

export default App
