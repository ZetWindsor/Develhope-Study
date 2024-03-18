const CardLine = ({ data }) => {
    return (
        <>

                <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                    <div id="quote">
                        <q class="italic text-gray-600"><div>
                            <p> {data.lines.map((line, index) => {
                                return (
                                    <span key={`div-${index}`}>
                                        {line}
                                    </span>
                                )
                            })}</p>
                        </div>
                        </q>
                    </div>
                </div>
        </>
    )
}

export default CardLine