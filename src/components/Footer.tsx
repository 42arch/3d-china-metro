const Footer = () => {
  return (
    <footer className='absolute bottom-0 flex w-full gap-2 bg-white px-4'>
      <span className='text-xs'>
        <a
          className='underline hover:text-blue-500'
          href='https://github.com/42arch/3d-china-metro'
          target='__blank'
        >
          GitHub
        </a>
      </span>
      <span className='text-xs'>
        模型提供：
        <a
          className='underline hover:text-blue-500'
          href='https://space.bilibili.com/472911129'
          target='__blank'
        >
          @梨鸭黄
        </a>
      </span>
    </footer>
  )
}

export default Footer
