interface Service {
  title: string
  description: string
  backgroundColor: string
  textColor: string
}

export default function Services() {
  const services: Service[] = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, HTML5 e CSS3.",
      backgroundColor: "bg-[#d6e5f1]",
      textColor: "text-blue-900",
    },
    {
      title: "Sistemas",
      description: "Desenvolvimento de sistemas e APIs REST com Node.js.",
      backgroundColor: "bg-[#f1e2d6]",
      textColor: "text-blue-900",
    },
    {
      title: "Mobile",
      description: "Desenvolvimento de aplicativos Android e iOS.",
      backgroundColor: "bg-[#f7f1fe]",
      textColor: "text-blue-900",
    },
  ]

  return (
    <section className="container mx-auto my-4 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">
          O que faço de melhor
        </p>
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>
        <p className=" text-sm text-gray-600">
          Posso atender uma gama completa de serviços, do front-end ao back-end
          com banco de dados e sistemas.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-2 md:flex-row">
        {services.map((service, index) => (
          <div
            className={`basis-1/3 rounded-lg p-4 ${service.backgroundColor} ${service.textColor}`}
            key={`service-${index}`}
          >
            <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-lg bg-gray-300" />
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
