"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo4() {
  return (
    <CardContainer className="flex flex-wrap gap-3">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          AAA Design System
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Web component library 
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://public.boxcloud.com/api/2.0/internal_files/2004668732863/versions/2212863510463/representations/png_paged_2048x2048/content/1.png?access_token=1!Ilp_rb2WOyjxiEgHIMaEaQ4utSb7tKiMA8GwlsIw33bfijq0NZbmnEXrcy2kCjG4BcpZMxrvwf8DM85hU3e116WO9cVURy2gwXvelD6cFRgPcG11AxHvc1GI2VehoHDhogpCVoSgtS3m4i2wWbIhMAiL2tEldQz-YuM2HR-uSVUemB6pCJM8SWmTggompRS3WblP-WHGBqKr5Dt3mR4hab7mULEdLDv-8PpH2MgrI6WtzQaFfrqKnK3qz2YxjpmDKFbust5RAkiGme5nwBvzX2IijxwBB0jw6HzizcOuTpmH6ylSgPkr3PH3UsrXhzQnja36VyvU1WyPOhTm1U-OpniWNxb-gx4wEoX_g7nXOsoMTELe1QwCuZ9j-nyeYZ9SwKUKgywWlLB7y2pO8AzoBEmq6hxFre3XQ9YwMmYQxYG1gnxE-lt6iWsFBak8yXmkgP067W5yUAVDYdiA7EssHGpdBexkMV_dPvnFpuO4eK_nnecZeXzhTjeVzhUu-SAfdqKi0Jd2Qubyur4qlmP5LY8rdlFDLfOBOef7mJrpnbd3MbfbEoIbwl0zuJMWJa166y-_1Deqj-xadYUfTtwqwL2z_tKwd5oADp62tXSK6WOo6lSmvtzwNmYu0J2MWNnWdadSCjIYVZW6GbDwL9OMIFUcdCI5tbTA3OwJEjEShbOhuksRAbKEnctkD7yriPmxQtmT8tdXoL0OHM8Tl8btLSU3T3MNC4VsiA1X4ZDoq_oGCopO3sVHCWDXD4e_OBB9X-aA4gIDxhyy3l3DJFfwoK6KeAJ8M_M.&box_client_name=box-content-preview&box_client_version=3.12.0"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.figma.com/design/6c73XLLY3D4OD5IrTCc2bR/AAA-Design-System?node-id=22896-11017&t=mvGKFB6ZUSS78vgT-1"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View details
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
