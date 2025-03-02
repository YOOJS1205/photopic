import { useParams } from 'react-router-dom';
import VoteVerticalEllipsis from '@/components/vote-detail/Top/ViteVerticalEllipsis';
import useVoteDetail from '@/components/vote-detail/Top/VoteAuthorInfo/hooks';

export default function VoteAuthorInfo() {
  const { shareUrl } = useParams<{ shareUrl: string }>();
  const { voteDetail } = useVoteDetail(shareUrl ?? '');

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between mb-[12px]">
        <div className="flex items-center">
          <img
            src={voteDetail.author.profileUrl}
            className="w-10 h-10 rounded-full mr-[5px]"
          />
          <span className="text-h3">{voteDetail.author.nickname}</span>
        </div>

        {voteDetail.isAuthor && <VoteVerticalEllipsis />}
      </div>

      <p>{voteDetail.description}</p>
    </div>
  );
}
