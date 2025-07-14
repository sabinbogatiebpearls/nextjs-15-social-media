import Image from 'next/image';
import React from 'react'

export default function Comments() {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/32297187/pexels-photo-32297187.jpeg"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-1 flex item-center justify-between w-full text-sm bg-slate-100 rounded-xl px-6 py-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-nonevflex-1"
          />
          <Image
            src="/emoji.png"
            alt="User Avatar"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className=""></div>
    </div>
  );
}
