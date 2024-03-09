import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Table from './Table';
import Form from './Form/Form';
import OrcamentoForm from './Form/OrcamentoForm';



export default function Example() {
  return (
      <div className="min-h-full">   
          <div>
            <Table />
          </div>
      </div>
  )
}
