'use client'
import SubForm from './SubForm';

export default function ContactForm () {
    return (
        <div>
            <SubForm/>
            <div className="border-2 border[#060B2B] text-white w-28 h-10 mx-auto text-center rounded-lg">
            <a href="/contact" >Submit</a>
        </div>

        </div>
    )
}