import {
  IconLogin,
  IconLogout,
  IconMan,
  IconMessageCircle,
  IconNotebook,
  IconUser,
} from '@tabler/icons'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full min-h-screen bg-gray-800">
      <div className="w-28 bg-white pt-10">
        <div className="flex justify-center items-center hover:bg-blue-200 py-3 transition duration-200 ease-in-out">
          <IconUser color="black" size={30} stroke={1.2}></IconUser>
        </div>
        <div className="flex justify-center items-center hover:bg-green-300 py-3 transition duration-200 ease-in-out">
          <IconMessageCircle
            color="black"
            size={30}
            stroke={1.2}
          ></IconMessageCircle>
        </div>
        <div className="flex justify-center items-center hover:bg-yellow-300 py-3 transition duration-200 ease-in-out">
          <IconNotebook color="black" size={30} stroke={1.2}></IconNotebook>
        </div>
        <div className="flex justify-center items-center hover:bg-red-300 py-3 transition duration-200 ease-in-out">
          <IconLogout color="black" size={30} stroke={1.2}></IconLogout>
        </div>
      </div>
      <div className="w-full max-w-screen-2xl mx-auto p-5">{children}</div>
    </div>
  )
}
