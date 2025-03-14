import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/common/Header/Header';
import Icon from '@/components/common/Icon';
import VoteRegistProvider from '@/components/vote-regist/Provider/VoteRegistProvider';
import VoteRegistForm from '@/components/vote-regist/VoteRegistForm';

export default function VoteRegistPage() {
  const navigate = useNavigate();

  const handleClickBackButton = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header
        leftNode={
          <Icon name="ArrowLeft" size="large" onClick={handleClickBackButton} />
        }
      />
      <VoteRegistProvider>
        <VoteRegistForm />
      </VoteRegistProvider>
    </div>
  );
}
