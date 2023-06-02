
import Button from "./button"
import ButtonComponent from '../components/button'
import Input from "@/components/Input"

export default function Home() {
  //terminal de gozukur
  console.log('homepage')

  return (
    <div>Home

      <Button/>
      {/* <ButtonComponent/> */}
      <Input>
        <ButtonComponent/>
      </Input>
    </div>
  )
}
