
import ControlMusic from './ControlMusic'

function Welcome() {
    return (
        <main  id='welcome-hero' className='flex justify-center items-center h-screen relative mx-8'  >
            <section className="max-w-[650px] text-center animate-blurred-fade-in">
                <h1
                 
                    className="text-center  font-medium font-parisienne text-[#B97600] text-[65px] desktop:text-[50px]"
                >
                    Bienvenidos
                </h1>
                <p className="text-[#6F6F6E] mt-4 desktop:text-2xl text-lg">
                    Queremos contar contigo en el día mas especial de nuestras vidas
                </p>
                <div className="desktop:mt-5 mt-3">
                    <ControlMusic client:load />
                </div>
            </section>
        </main>
    )
}

export default Welcome