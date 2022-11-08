import { Header } from '../components/common/header';
import { Footer } from '../components/common/footer';

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <header className="shadow-lg shadow-brightBlue/5 py-4 bg-midnight bg-opacity-30 backdrop-blur-lg fixed w-full z-10">
        <Header></Header>
      </header>

      <main className="flex-grow mt-24">{children}</main>

      <footer className="shadow py-4 bg-midnight bg-opacity-30">
        <Footer></Footer>
      </footer>
    </div>
  );
};
