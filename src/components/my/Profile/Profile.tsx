import useProfile from './hooks';

export default function Profile() {
  const { userInfo } = useProfile();

  return (
    <div className="flex gap-6 items-center">
      <img
        src={userInfo.profileUrl}
        className="w-24 h-24 rounded-full object-cover aspect-square"
      />
      <div className="flex flex-col gap-1 break-keep">
        <p className="text-h2">
          반가워요,{' '}
          <strong className="text-accent-600">{userInfo.nickname}</strong>님!
        </p>
        <p className="text-title-medium">뽀또 본부에 오신 걸 환영합니다.</p>
      </div>
    </div>
  );
}
