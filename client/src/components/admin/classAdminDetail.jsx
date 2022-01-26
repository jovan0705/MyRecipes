const ClassAdminDetail = ({setShowModal}) => {
    return (
        <>
        <div className="modalBackground absolute left-0 top-0 bg-slate-200 bg-opacity-50 h-screen w-screen flex justify-center items-center">
            <div className="modalContainer w-1/3 flex flex-col gap-3 border rounded-lg bg-white shadow-lg">
                <div className="modalHeader">
                    <img className="h-48 w-full" src="https://images.unsplash.com/photo-1643063386159-6ee339ba9628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                </div>
                <div className="p-3 space-y-3">
                    <div className="">
                        <h3 className="font-bold">Name</h3>
                        <p className="text-gray-500">Cah Kangkung Lezat</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Link</h3>
                        <p className="text-gray-500">http://inilinkzoom</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Date</h3>
                        <p className="text-gray-500">2 Januari 2022</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Price</h3>
                        <p className="text-gray-500">RP. 150.000</p>
                    </div>
                </div>
                <div className="modalBody py-5 text-center">
                    <button className="btn btn-outline btn-primary text-xs" onClick={() => setShowModal(false)}>Close</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ClassAdminDetail