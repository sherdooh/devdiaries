'use client';
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Log the params to ensure it's being passed correctly
  useEffect(() => {
    console.log('Params:', params);
  }, [params]);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get('/api/blog', {
        params: { id: params.id },
      });
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params && params.id) {
      fetchBlogData();
    } else {
      setLoading(false);
      setError(new Error('No ID provided'));
    }
  }, [params]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="bg-gray-200 py-5 md:px-12 lg:px-28">
        <Header />
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
        <p>{data.description}</p>

        <h3 className="my-5 text-[18px] font-semibold">Step1: Self Lorem ipsum dolor sit.</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Step2: Self Lorem ipsum dolor sit.</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Step3: Self Lorem ipsum dolor sit.</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium vel ullam
          tempore beatae molestiae provident doloremque veniam sint inventore!
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Step4: Conclusion.</h3>
        <p className="my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laudantium dicta, provident,
          tempore ipsum quibusdam pariatur explicabo nisi rerum sit consequatur animi id excepturi
          eos dolorem quae natus, tenetur sequi voluptatum architecto soluta rem dolorum nobis
          fugiat. Error voluptatibus obcaecati enim facilis est incidunt, molestiae, architecto
          nesciunt nisi nihil reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maxime accusantium vel ullam tempore beatae molestiae provident doloremque veniam
          sint inventore!
        </p>
        <div className="my-24">
          <p className="text-black font font-semibold my-4">Share this article on social media</p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
