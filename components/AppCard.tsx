import Image from "next/image";
import React from "react";

type App = {
  id: number;
  icon: string;
  name: string;
};

type AppCardProps = {
  app: App;
};

export default function AppCard({ app }: AppCardProps) {
  return (
    <div className="flex flex-col appCard items-center justify-center  text-secondary   z-10 bg-primary md:h-[230px] md:min-w-[279px]  min-h-28 min-w-28 rounded-xl md:rounded-[41px] relative overflow-hidden hover:after:bg-[url('../public/blur.png')] hover:after:absolute hover:after:top-[-65%] after:transition-all after:duration-500 after:ease-in duration-500 transition-all ease-in hover:after:right-0 hover:after:bg-blursize hover:after:left-0 hover:after:w-full hover:after:h-full">
      <Image
        src={app.icon}
        width={500}
        height={500}
        alt="PhotoShop"
        className="md:w-fit md:h-12 w-6 h-auto absolute "
      />
      <span className="md:text-xl text-xs italic hidden mt-auto md:mb-20 mb-10">{app.name}</span>
    </div>
  );
}
