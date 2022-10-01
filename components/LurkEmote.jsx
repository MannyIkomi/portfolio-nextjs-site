import AnchorLink from './AnchorLink';

export default function LurkEmote({ className, href }) {
  return (
    <AnchorLink
      className={className}
      href={href || 'https://www.twitch.tv/mannimoki'}
    >
      <img
        src="/Lurk-emote.png"
        alt="Dog emote with glasses looking up with a smile"
      />
    </AnchorLink>
  );
}
