export default function TestStaticPage() {
    return (
      <div>{new Intl.DateTimeFormat('tr-TR',{dateStyle:'full',timeStyle:'short'}).format(new Date())}</div>
    )
  }