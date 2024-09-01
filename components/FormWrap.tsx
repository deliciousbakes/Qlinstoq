import React from 'react';

const FormWrap = ({ children }: { children: React.ReactNode }) => {
    return <div
        className='min-h-fit h-full pb-12 pt-24 items-center justify-center flex'>
        <div className="max-w-[650px] w-full flex flex-col items-center shadow-xl shadow-slate-800 rounded-md p-4  md:p-8">



      {children}
        </div>
  </div>;
};

export default FormWrap
