import SectionWrapper from "../SectionWrapper";
import { services } from "./services";
//grid gap-x-[8rem] gap-y-10 sm:grid-cols-2 lg:grid-cols-4
const Services = () => {
    return (
        <>
            <SectionWrapper className="h-full">
                <div id = "services" className="custom-screen h-full flex flex-col justify-center items-center ">
                    <h1 className="md:text-[3.125rem] text-[1.763rem] font-body font-bold text-dark-blue">Serviços</h1>
                    <div className = "flex flex-col mt-[3rem] items-center justify-center  w-full ">
                        <div className=" items-center  justify-center w-full max-w-[70rem] flex flex-row flex-wrap ">
                            {
                                services.map(service => (
                                    <span className="  w-[22rem] md:w-[25rem] my-12 sm:my-16 md:my-8 mx-[4.95rem] flex flex-col justify-center text-center " key = {service.title}>
                                        <div className="flex  justify-center items-center">
                                            {service.icon}
                                        </div>
                                        <h2 className="md:text-[2rem] text-[1.563rem] font-title font-regular text-dark-blue" >{service.title}</h2>
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                        
                </div>
            </SectionWrapper>
        </>
    );    
};
export default Services;