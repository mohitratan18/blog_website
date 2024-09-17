/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import { assets, blog_data } from "@/Assests/assets";
import logo from "@/Assests/assets";
import Image from "next/image";
import Footer from "@/Components/Foooter/Footer";

const page = ({ params }) => {
  const [CurrentData, setCurrentData] = useState(null);
  const fetchData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      console.log(blog_data[i].id + " " + params.id);

      if (blog_data[i].id == params.id) {
        setCurrentData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <div>
      {CurrentData && (
        <div>
          <div className="bg-gray-300 p-6">
            <div className="flex justify-between">
              <Image src={assets.logo} alt="" />
            </div>
            <div className="flex justify-center items-center flex-col mt-6 sm:mt-10 gap-4 max-w-[700px] mx-auto text-center">
              <h1 className="text-3xl font-semibold sm:text-5xl">
                {CurrentData.title}
              </h1>
              <Image src={CurrentData.author_img} alt="" />
              <p>{CurrentData.author}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[90%] sm:max-w-[80%] mx-auto p-4 gap-4">
            <Image src={CurrentData.image} alt="" />
            <p className="font-semibold text-3xl">Description : </p>
            <div className="font-sans text-lg line leading-8 tracking-wide mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              libero impedit est praesentium quibusdam modi consectetur, quo
              esse, officiis quod, a numquam cupiditate rerum non ullam
              similique. Labore sint commodi eum dignissimos earum quis impedit
              consequatur deserunt eaque nostrum similique, molestiae corrupti,
              vero officiis, omnis qui sed? Soluta eligendi maxime iure maiores
              corporis, saepe, error ex expedita, excepturi quam sunt. Omnis,
              aliquid. Repellat autem hic eligendi a molestiae natus dignissimos
              sapiente veritatis cum vel! Ea nam atque magni hic aperiam sed
              iure quos id, quae officia ducimus iusto adipisci recusandae
              expedita assumenda dignissimos eos sunt! Accusantium nobis,
              suscipit quidem corporis ut voluptatum placeat, minus error optio
              repellendus impedit ab atque iusto id? Cum nulla delectus quae
              ipsam doloremque repudiandae natus aut neque laudantium autem,
              dolorem maiores accusantium alias exercitationem! Culpa blanditiis
              possimus illum nesciunt molestias iure fuga ipsum voluptatum!
              Totam distinctio consectetur tenetur sint? Aspernatur rem vero
              magni dolores tempora ex nostrum accusamus nesciunt, sunt
              inventore. Voluptatibus corrupti tempora enim, quibusdam, dolor
              eum beatae ex maiores, distinctio nisi incidunt amet. Quibusdam,
              quidem excepturi praesentium provident quae in eveniet sapiente
              tenetur sint. Et porro quasi ipsam expedita, cupiditate nisi
              mollitia rem accusantium pariatur, aut dolores illo laboriosam
              nobis quam fuga debitis! Iusto eum voluptatum corrupti asperiores
              optio tempora laudantium et architecto. Nemo ratione explicabo
              accusamus vel illum odio necessitatibus iure accusantium magni
              minima, ad et! Cumque dolor dolorem delectus, assumenda repellat
              provident enim nemo, fuga eligendi sed necessitatibus ea fugit,
              distinctio rem saepe voluptatem id nobis repellendus? Ullam
              placeat autem voluptates dignissimos ipsam in ut commodi, sunt id
              reprehenderit totam sequi minima eveniet dolorum perspiciatis eum
              deleniti harum repellendus aspernatur iste quod? Ducimus iure,
              accusamus eaque quibusdam itaque cum cupiditate? Sed odit saepe
              delectus praesentium eum distinctio eos nulla voluptatum impedit
              libero, voluptate necessitatibus, neque inventore. Quas ut tempore
              in possimus facilis neque veritatis sequi odit officiis enim
              facere amet ullam delectus dolorum dicta impedit deleniti
              similique nulla nisi ex, illum aperiam incidunt, blanditiis
              distinctio. Sint labore vitae aliquam fugiat vero delectus
              asperiores, quis exercitationem molestiae amet, vel nam assumenda
              atque, voluptatum quos. Optio quisquam atque magnam tempore
              recusandae, aut quasi minus facere voluptatibus, suscipit
              provident magni nam debitis! Quia, iure. Deleniti ipsam illo
              quaerat at aliquid praesentium doloremque rem, nulla, sint illum
              molestias? Porro, aspernatur sint iste quia et quod dolore,
              reprehenderit voluptatibus ullam provident soluta hic doloremque
              repudiandae excepturi nulla, recusandae beatae architecto omnis
              vitae eos neque ipsa optio! Tempore eaque exercitationem esse,
              molestias, qui mollitia iusto eos officia unde quas rem
              accusantium vero totam magnam odio dolores aperiam! Cupiditate
              vero non dolorem suscipit corporis, corrupti dignissimos ipsum
              quisquam sunt nostrum porro itaque unde, quidem delectus sed
              blanditiis et vitae, natus consequatur at! Accusantium aliquam
              architecto eum earum inventore? Architecto ad repellat facilis
              quod dolorem consequatur porro, ratione labore?
            </div>
          </div>
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default page;
