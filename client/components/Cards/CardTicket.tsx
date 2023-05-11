export default function CardTicket() {
    return (
        <section className="container flex h-80 w-full flex-col gap-2 overflow-y-scroll rounded-3xl bg-transparent  lg:container lg:mx-auto  lg:h-[500px] lg:p-10">
        {allTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="my-2 flex h-96 flex-col gap-2 rounded-3xl bg-white px-4  py-2 shadow-xl shadow-black/30"
          >
            <div className="flex flex-row items-center justify-between">
              <strong className="flex w-auto flex-col">{ticket.passageInfo.origin}</strong>
              <p className="text-center">hacia</p>
              <strong className="flex flex-col ">{ticket.passageInfo.destination}</strong>
              <div className="flex flex-col">{ticket.passageInfo.departureDate}</div>
              <button onClick={() => handleOpenModal(ticket)}>Ticket</button>
            </div>
          </div>
        ))}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={handleModalClick}
            ref={modalRef}
          >
            <div
              className="mx-auto h-96 w-96 rounded-2xl bg-white shadow-2xl shadow-black/60"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedTicket && (
                <article key={selectedTicket.id} className="p-6">
                  <Image src={logo} alt="logo" className="mx-auto  w-16  py-4" />
                  <h2 className="mb-4 text-center text-2xl font-bold">
                    <>
                      {selectedTicket.passageInfo.origin} to{" "}
                      {selectedTicket.passageInfo.destination}
                    </>
                  </h2>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="">
                      <p className="mb-2 flex flex-col">
                        <strong>Fecha de salida:</strong>{" "}
                        {selectedTicket.passageInfo.departureDate}
                      </p>
                      <p className="mb-2 flex flex-col">
                        <strong>Horario de salida:</strong>{" "}
                        {selectedTicket.passageInfo.departureTime}
                      </p>
                      <p className="mb-2 flex flex-col">
                        <strong>Duracion del viaje:</strong> {selectedTicket.passageInfo.duration}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 flex flex-col">
                        <strong>Ticket ID:</strong> {selectedTicket.id}
                      </p>
                      <p className="mb-2 flex flex-col">
                        <strong>Precio:</strong> ${selectedTicket.price}
                      </p>
                      <p className="mb-2 flex flex-col">
                        <strong>Número de asiento:</strong>{" "}
                        {selectedTicket.passageInfo.numberSeat}
                      </p>
                    </div>
                  </div>
                  <button onClick={saveAsPDF}>Guardar Ticket</button>
                </article>
              )}
            </div>
          </div>
        )}
      </section>
    )
}