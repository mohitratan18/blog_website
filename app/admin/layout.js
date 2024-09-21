import Sidebar from "@/Components/Sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex">
        <Sidebar />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
