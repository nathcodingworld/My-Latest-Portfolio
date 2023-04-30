
import { sendContactMessage } from '@basepath/provider/mailerProvider'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {fullName, phone, email, message} = req.body  
  if(!fullName || !email || !message) res.status(200).json({success: false, message: "name, email or message not valid"}) 
  const ret = await sendContactMessage(fullName, email, phone || '-', message)
  if(!ret  || ret[0].statusCode >= 300)  {
    res.status(200).json({success: false, message: "Sorry, something went wong, message not sent"}) 
  }
  return res.status(200).json({success: true, message: "Thank you! message has been sent"}) 
}
