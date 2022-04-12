// import Footer from "@/components/Shared/Footer/";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
