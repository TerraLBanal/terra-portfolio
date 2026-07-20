export default function SideNote({ heading, children, align = 'left', fitContent = false }) {
  return (
    <section className="w-full">
      <div
        className={`mx-auto flex w-full max-w-[1440px] px-6 py-8 md:px-12 lg:px-24 lg:pt-10 lg:pb-24 ${
          align === 'right' ? 'justify-end' : 'justify-start'
        }`}
      >
        <p
          className={`${fitContent ? 'w-fit whitespace-nowrap' : 'w-full'} max-w-[288px] text-[14px] leading-[20px] text-ink`}
        >
          <span className="font-normal">{heading}</span>
          <br />
          <span className="font-light">{children}</span>
        </p>
      </div>
    </section>
  )
}
