import { Dropdown } from 'react-bootstrap'
import React from 'react'

const DropdownMenu = () => {
  return (
    <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">공지</Dropdown.Item>
          <Dropdown.Item href="/saved_page">저장됨</Dropdown.Item>
          <Dropdown.Item href="#/action-3">게시글 업로드</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  )
}

export default DropdownMenu
