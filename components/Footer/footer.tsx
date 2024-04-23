import { Separator } from "../ui/separator";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import React from "react";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <div className="mx-12 mt-20">
      <Separator className="bg-[#828282]" />
      <div className="flex flex-col sm:flex-row sm:justify-between  items-center">
        <div className="flex flex-row sm:flex-col  sm:justify-between items-center gap-x-20 sm:gap-y-20 py-12">
          <div className="text-2xl font-medium">Site Name</div>
          <div className="flex gap-6 ">
            <FaFacebook color="#828282" size={20} />
            <FaLinkedin color="#828282" size={20} />
            <FaYoutube color="#828282" size={20} />
            <FaInstagram color="#828282" size={20} />
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-4 gap-x-20 pb-12 sm:py-12 sm:mr-20">
            <Button variant={'link'} className="font-bold">Topic</Button>
            <Button variant={'link'} className="font-bold">Topic</Button>
            <Button variant={'link'} className="font-bold">Topic</Button>
            <Button variant={'link'}>Page</Button> 
            <Button variant={'link'}>Page</Button> 
            <Button variant={'link'}>Page</Button> 
            <Button variant={'link'}>Page</Button> 
            <Button variant={'link'}>Page</Button> 
            <Button variant={'link'}>Page</Button> 
            <Button variant={'link'}>Page</Button> 
            <Button variant={'link'}>Page</Button> 
            <Button variant={'link'}>Page</Button>            
        </div>
      </div>
    </div>
  );
};
