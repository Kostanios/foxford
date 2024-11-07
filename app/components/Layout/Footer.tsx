import './footer.css';
import { Logo } from '@app/components/Logo/Logo';
import testIds from '@app/utils/test-ids';
import Link from 'next/link';

const Footer = () => (
  <footer
    className="m-h-56 leading-7 sm:p-14 font-site"
    data-testid={testIds.LAYOUT.FOOTER}
  >
    <div className="flex flex-col sm:flex-row">
      <div className="basis-2/3 bg-blue-site text-white p-14 sm:pl-44">
        <h2 className="text-2xl sm:text-3xl font-bold">Свяжитесь с Нами</h2>
        <div className="flex flex-col sm:flex-row text-sm font-helvetica">
          <div className="basis-1/3 border-b border-white pb-4">
            <p className="mt-10">
              Если вы хотите записаться к нам или у вас возник вопрос
              обращайтесь к нам с любыми вопросами или проблемами в наш
              инстаграмм или по почте
            </p>
            <p className="mt-10">Registered Charity: 12345-67</p>
          </div>
          <div className="basis-1/3"></div>
          <div className="basis-1/2 border-b border-white pb-4 pt-4">
            <a
              className="hover:text-orange-site transition ease"
              href="https://maps.google.com?q=Foxford%20school,%20Tadeusza%20Czackiego%203/5,%2000-043%20Warszawa&ftid=0x471ecdb000e4dd07:0x788dd8a8d352005d&entry=gps&lucs=,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_st=com.google.maps.preview.copy"
            >
              Twarda 14
              <br /> 00-824 Варшава
            </a>
            <p className="mt-10 hover:text-orange-site transition ease">
              <a href="tel:+48883476721">
                Телефон: <span className="text-nowrap">+48 883476721</span>
              </a>
            </p>
          </div>
        </div>
        <h3 className="text-l md:text-4xl mt-10 hover:text-orange-site transition ease">
          <a href="mailto:fox.ford.school.eng@gmail.com">
            fox.ford.school.eng@gmail.com
          </a>
        </h3>
      </div>
      <div className="basis-1/3 bg-gray-200 p-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Для записи на занятие пишите в директ нашего истаграмма
        </h2>
        {/*<p className="mt-6">Sign up to our newsletter to stay informed</p>*/}
        {/*<input*/}
        {/*  type="email"*/}
        {/*  className="my-6 w-3/4 block mx-auto bg-transparent border-0 border-b border-blue-site text-blue-site"*/}
        {/*  placeholder="Email Address"*/}
        {/*/>*/}
        {/*<a href="" className="text-purple-site py-6 font-site">*/}
        {/*  Subscribe Now*/}
        {/*</a>*/}
      </div>
    </div>
    <div className="mx-auto text-center sm:text-xs mt-6">
      <Logo />
      <p className="font-default mb-10">
        © 2024 FoxFord. Powered and secured by NextJS
      </p>
    </div>
  </footer>
);

export default Footer;
