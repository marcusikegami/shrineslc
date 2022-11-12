import shrinelogo from '../assets/images/shrinelogo.jpg';
import {AiFillYoutube, AiFillInstagram} from "react-icons/ai";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="text-gray-500 text-3xl font-bold">SHRINE SLC</span>
            </a>
          </div>
          
          <Popover.Group as="nav" className="space-x-10 flex">
            <a href="https://www.youtube.com/channel/UCCJCWKOR156k8oA1ewXuKHQ" target="__blank" className="text-base font-medium text-gray-500 hover:text-red-600">
            <AiFillYoutube className='h-10 w-10' />
            </a>
            <a href="https://www.instagram.com/shrineslc/" target="__blank" className="text-base font-medium text-gray-500 hover:text-pink-600">
            <AiFillInstagram className='h-10 w-10' />
            </a>
          </Popover.Group>
        </div>
      </div>
    </Popover>
  )
}