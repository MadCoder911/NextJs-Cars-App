import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start justify-start items-start gap-6 ">
          <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} />
          <p className="text-base text-gray-500">
            Car Hub 2023 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => {
            return (
              <div key={link.title} className="footer__link">
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((singleLink) => {
                  return (
                    <Link
                      key={singleLink.title}
                      href={singleLink.url}
                      className="text-gray-500"
                    >
                      {singleLink.title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <div className="footer__copyrights-link">
            <Link href={"/"} className="text-gray-500">
              @2023 CarHub. All rights reserved
            </Link>
            <Link href={"/"} className="text-gray-500">
              Privacy Policy
            </Link>
            <Link href={"/"} className="text-gray-500">
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
