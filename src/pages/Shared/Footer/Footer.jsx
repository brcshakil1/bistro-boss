const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row text-white ">
        <div className="flex-1 text-center bg-[#1F2937] py-20">
          <h2 className="uppercase pb-6 text-3xl font-medium">Contact Us</h2>
          <address className="leading-7">
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </address>
        </div>
        <div className="flex-1 text-center bg-[#111827] py-20">
          <h2 className="uppercase pb-6 text-3xl font-medium">Follow Us</h2>
          <div className="flex flex-col justify-center ">
            <p className="pb-8">Join us on social media</p>
            <div className="flex justify-center gap-2">
              <button className="btn btn-primary">fb</button>
              <button className="btn btn-primary">instagram</button>
              <button className="btn btn-primary">X</button>
            </div>
          </div>
        </div>
      </div>
      <aside className="text-center py-4 bg-[#151515] text-white">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
