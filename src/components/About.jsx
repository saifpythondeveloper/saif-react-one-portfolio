import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
                I'm saifuddin completed my graduation as mechanical engineering. I'm looking for a web developer job. i choose this role bec i wanted to be updated in this growing world where techonolgy has became the head of every stream.

            </p>

            <br />

            <p className="text-xl">
                i have gain knowledge different techonolgies by doing a six months certified internship from ascent software training institute,Bangalore. where i learn full stack development course with python language and frontend frameworks like javascript, reactjs, html, css and backend frameworks as django,postman and for database postgresSQL & kafka for messaging service.
            </p>
        </div>
    </div>
  );
};

export default About;
