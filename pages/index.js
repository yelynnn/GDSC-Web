export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-black ">
      <div className="px-[140px] pt-[15px] flex justify-between items-center">
        <img
          src="https://res.heraldm.com/content/image/2022/06/21/20220621000020_0.jpg"
          className="w-[180px] h-[80px]"
        ></img>
        <button className="bg-red-600 text-white rounded-md text-sm py-1.5 px-3">
          로그인
        </button>
      </div>
      <div className="text-white flex justify-center items-center flex-col mt-[130px]  pl-[50px] gap-[10px]">
        <h1 className="font-bold text-4xl">영화, 시리즈 등을</h1>
        <h1 className="font-bold text-4xl">무제한으로</h1>
        <h4 className="font-semibold mt-[5px]">
          5,500원으로 시작하세요. 멤버십은 언제든지 해지 가능.
        </h4>
        <p className="text-sm mt-[10px] ">
          시청할 준비가 되셨나요, 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </p>
        <div className="flex gap-[8px]">
          <input
            className="rounded-sm bg-black bg-opacity-80 border-white border-[1px] w-[300px] h-[35px] text-sm"
            placeholder=" 이메일 주소"
            type="email"
          ></input>
          <button className="bg-red-600 text-sm rounded-sm py-1.5 px-4">
            시작하기 &gt;
          </button>
        </div>
      </div>
    </div>
  );
  d;
}
