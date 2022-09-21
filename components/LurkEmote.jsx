import Styles from './styles/LurkEmote.module.scss';

export default function LurkEmote() {
  return (
    <img
      src="/Lurk-emote.png"
      alt="Dog emote with glasses looking up with a smile"
      className={Styles.emote}
    />
  );
}
