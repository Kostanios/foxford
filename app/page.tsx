import { CarouselClient } from '@app/components/Carousel/Carousel';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

export default function Home() {
  return (
    <div className="mx-auto relative sm:px-20 py-5">
      <div className="text-center w-full relative">
        <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full bg-black opacity-50"></div>
        <video autoPlay muted loop className="w-full h-[200px] sm:h-fit">
          <source
            src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h2 className="sm:text-3xl mb-4">ИЗУЧЕНИЯ ИНОСТРАННЫХ ЯЗЫКОВ</h2>
          <h1 className="sm:text-[70px] sm:leading-[70px]">
            Качественные Знания для Всех
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row relative items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site">
          <h3 className="flex-1 sm:text-3xl py-4 px-8 text-center sm:text-left">
            Запишись на бесплатное пробное занятие
          </h3>
          <a
            href="/contact"
            className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-site w-fit"
          >
            Запись
          </a>
        </div>
      </div>

      <div
        className="flex mt-12 sm:mt-32 sm:gap-12 flex-col sm:flex-row"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="/images/IMG_7505.jpeg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-6 sm:w-60 relative bg-white sm:mt-[-250px]">
            <h3 className="text-2xl font-site">Опытные преподаватели</h3>
            <p className="my-6 text-sm">
              Наши преподаватели мастера своего дела, которые умеют находить
              подход к каждому ученику. С ними грамматика и лексика превращаются
              в живой язык, доступный и интересный для всех
            </p>
            {/*<a*/}
            {/*  href="/projects"*/}
            {/*  className="text-purple-site py-6 font-site"*/}
            {/*  data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}*/}
            {/*>*/}
            {/*  Read More*/}
            {/*</a>*/}
          </div>
        </div>
        <div className="basis-2/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="/images/IMG_2035.jpeg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site">
              Современные классы в центре Варшавы
            </h3>
            <p className="my-6 text-sm">
              Учите языки в светлых, уютных аудиториях, оснащенных всем
              необходимым для продуктивного обучения. Мы создаем атмосферу, где
              учеба становится комфортной и увлекательной.
            </p>
            {/*<a href="/about" className="text-purple-site py-6 font-site">*/}
            {/*  Read More*/}
            {/*</a>*/}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:mt-32 mb-12 sm:gap-12">
        <div className="basis-2/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="/images/IMG_5036.JPG"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-44 sm:mt-[-230px]">
            <h3 className="text-2xl font-site">Гибкие абонементы</h3>
            <p className="my-6 text-sm">
              Занимайтесь в группах по 4-8 человек и выберите комфортный тариф:
              стандартный абонемент на 8 занятий или интенсивный на 12.
            </p>
            <strong>Помесячная Оплата</strong>

            {/*<a href="/news" className="text-purple-site py-6 font-site">*/}
            {/*  Read More*/}
            {/*</a>*/}
          </div>
        </div>
        <div className="basis-1/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="/images/IMG_3730.jpeg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site">Бесплатные учебные материалы</h3>
            <p className="my-6 text-sm">
              Все необходимые материалы предоставляются бесплатно, чтобы вы
              могли сосредоточиться на учебе без дополнительных расходов
            </p>
            {/*<a href="/contact" className="text-purple-site py-6 font-site">*/}
            {/*  Read More*/}
            {/*</a>*/}
          </div>
        </div>
      </div>
      <h2 className="text-3xl sm:text-5xl text-center mb-10 sm:mb-20 font-site">
        2035 in Numbers
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 sm:justify-between items-center font-site">
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] block sm:leading-[200px] text-purple-site">
            40K
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:right-0 sm:top-[190px]">
            Dollars
            <br />
            Raised
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            8K
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[50px] sm:left-[130px] bg-white">
            Graduate
            <br />
            Students
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            120
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[130px] sm:left-[150px] bg-white">
            Technology
            <br />
            Centers
          </span>
        </div>
      </div>
      <CarouselClient />
    </div>
  );
}
