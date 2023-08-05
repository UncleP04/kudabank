import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Logo from "../../public/Images/smalllogo.png";
import "../styles/menu.css";
import Link from "next/link";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-out-quart', // Easing function
      once: true, // Only animate once
    });
  }, []);  
  return (
    <div>
      <section className="grid grid-cols-1 justify-start items-center md:mt-[40px] relative overflow-x-hidden md:px-[4%]">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-20 p-4">
          <div data-aos="zoom-in">
            <Image src={Logo} alt="logo.png" width={700} height={300} className="w-[150px]" />
          </div>
          <div className="md:text-start">
            <h3 className="text-[17px] font-bold text-primary" data-aos="zoom-in">Features</h3>
            <ul className="mt-6" data-aos="zoom-in">
              <li className="font-semibold py-2">
                <Link href="">Kuda Card</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Investment</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Spend</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Save</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Budget</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Borrow</Link>
              </li>
            </ul>
          </div>
          <div className="md:text-start">
            <h3 className="text-[17px] font-bold text-primary" data-aos="zoom-in">Company</h3>
            <ul className="mt-6" data-aos="zoom-in">
              <li className="font-semibold py-2">
                <Link href="">Blog</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Press</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">join our Team</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="md:text-start">
            <h3 className="text-[17px] font-bold text-primary" data-aos="zoom-in">Help</h3>
            <ul className="mt-6" data-aos="zoom-in">
              <li className="font-semibold py-2">
                <Link href="">Get Help</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">FAQS</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">KSecurity</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div  className="md:text-start">
            <h3 className="text-[17px] font-bold text-primary" data-aos="zoom-in">Transpareny</h3>
            <ul className="mt-6" data-aos="zoom-in">
              <li className="font-semibold py-2">
                <Link href="">Terms & Conditions</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Privacy Policy</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Infomation Security</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Policy</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Cookies Policy</Link>
              </li>
              <li className="font-semibold py-2">
                <Link href="">Complaints</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 p-4">
          <p className="text-[13px] text-primary py-2" data-aos="zoom-in">
            © 2023 Kuda Technologies Ltd (Company No.11472232). All rights
            reserved.
          </p>
          <p className="text-[13px] text-primary py-2" data-aos="zoom-in">
            If you would like to find out more about which Kuda entity you
            receive services from, please reach out to us via the in-app chat in
            the Kuda app. Nigerian banking services offered by Kuda Microfinance
            Bank (RC796975) with registered address at 151 - Herbert Macaulay
            Way, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the
            Central Bank of Nigeria. Deposits are insured by the Nigerian
            Deposit Insurance Corporation (NDIC)
          </p>
          <p className="text-[13px] text-primary py-2">
            UK services are offered by Kuda EMI Ltd (Company No. 13724208) with
            registered address at 5 New Street Square, London, EC4A 3TW, United
            Kingdom. Kuda EMI Ltd is A Distributor of Modulr FS Limited. Modulr
            FS Limited (Company No 09897919), is regulated by the Financial
            Conduct Authority for issuance of electronic money under reference
            900573.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
