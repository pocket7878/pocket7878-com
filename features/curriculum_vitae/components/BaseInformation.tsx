export const BaseInformation = () => {
  return (
    <section>
      <h2 className='text-xl font-bold'>基本情報</h2>
      <hr className='mb-4' />
      <table className='border-collapse'>
        <tbody>
          <tr className='border border-solid border-gray-600'>
            <td className='border border-solid border-gray-600 p-2'>氏名</td>
            <td className='border border-solid border-gray-600 p-2'>
              十亀眞怜 (Sogame Masato)
            </td>
          </tr>
          <tr className='border border-solid border-gray-600'>
            <td className='border border-solid border-gray-600 p-2'>email</td>
            <td className='border border-solid border-gray-600 p-2'>
              <a href='mailto:poketo7878@gmail.com'>poketo7878@gmail.com</a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
