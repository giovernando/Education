import { useTypewriter } from '@/hooks/useTypewriter';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseSpeed?: number;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const TypewriterText = ({
  texts,
  typingSpeed = 80,
  deleteSpeed = 40,
  pauseSpeed = 2000,
  className = '',
  tag = 'span',
}: TypewriterTextProps) => {
  const { text, cursor } = useTypewriter({ texts, typingSpeed, deleteSpeed, pauseSpeed });

  const Component = tag as any;

  return (
    <Component className={className}>
      {text}
      <span aria-hidden="true" className="animate-pulse">
        {cursor}
      </span>
    </Component>
  );
};

export default TypewriterText;

