import dynamic from "next/dynamic";

export default dynamic(() => Promise.resolve(({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
}), {
    ssr: false,
})
