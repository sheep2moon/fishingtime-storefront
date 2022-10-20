import React from "react"
import { IconProps } from "types/icon"

const FishingBox: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 203 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M152.8 45.3H71.1C70.6 45.3 70.1 45.1 69.8 44.7C69.5 44.3 69.3 43.9 69.3 43.4L70.8 1.90002C70.8 0.900024 71.6 0.0999756 72.6 0.0999756H151.2C152.2 0.0999756 153 0.900024 153 1.90002L154.5 43.4C154.5 43.9 154.3 44.4 154 44.7C153.8 45.1 153.3 45.3 152.8 45.3ZM73 41.6H150.9L149.5 3.70001H74.4L73 41.6Z"
        fill="#3F5765"
      />
      <path
        d="M196.9 22H189.3V14.2H171.4V22H52.5V14.2H34.6V22H27C18.9 22 12.3 28.3 11.9 36.4L9.00003 92.7H214.9L212 36.4C211.7 28.3 205 22 196.9 22Z"
        fill="#F59390"
      />
      <path d="M52.5 22H57.8L59.1 87H52.5V22Z" fill="#CC6D6D" />
      <path d="M190.6 22H195.9L197.2 87H190.6V22Z" fill="#CC6D6D" />
      <path
        d="M189.4 89.9H172C171 89.9 170.2 89.1 170.2 88.1V14.3C170.2 13.3 171 12.5 172 12.5H189.4C190.4 12.5 191.2 13.3 191.2 14.3V88C191.2 89 190.4 89.9 189.4 89.9ZM173.8 86.2H187.6V16H173.8V86.2Z"
        fill="#3F5765"
      />
      <path
        d="M52.6 89.9H35.2C34.2 89.9 33.4 89.1 33.4 88.1V14.3C33.4 13.3 34.2 12.5 35.2 12.5H52.6C53.6 12.5 54.4 13.3 54.4 14.3V88C54.4 89 53.6 89.9 52.6 89.9ZM37 86.2H50.8V16H37V86.2Z"
        fill="#3F5765"
      />
      <path
        d="M214.9 94.5H9.00003C8.50003 94.5 8.00004 94.3 7.70004 93.9C7.40004 93.5 7.20004 93 7.20004 92.5L10.1 36.2C10.6 27.2 18 20.1 27.1 20.1H32.8V14.2C32.8 13.2 33.6 12.4 34.6 12.4H52.5C53.5 12.4 54.3 13.2 54.3 14.2V20.1H169.6V14.2C169.6 13.2 170.4 12.4 171.4 12.4H189.3C190.3 12.4 191.1 13.2 191.1 14.2V20.1H196.8C205.9 20.1 213.3 27.2 213.8 36.2L216.7 92.5C216.7 93 216.5 93.5 216.2 93.9C215.9 94.3 215.4 94.5 214.9 94.5ZM10.9 90.8H213L210.2 36.4C209.8 29.3 204 23.7 196.9 23.7H189.3C188.3 23.7 187.5 22.9 187.5 21.9V16H173.2V21.9C173.2 22.9 172.4 23.7 171.4 23.7H52.5C51.5 23.7 50.7 22.9 50.7 21.9V16H36.4V21.9C36.4 22.9 35.6 23.7 34.6 23.7H27C19.9 23.7 14 29.3 13.7 36.4L10.9 90.8Z"
        fill="#3F5765"
      />
      <path
        d="M27 177.7H196.9C205 177.7 211.6 171.4 212 163.3L214.9 107H9.00003L11.9 163.3C12.3 171.3 18.9 177.7 27 177.7Z"
        fill="#B4D8E3"
      />
      <path
        d="M9.50003 117.8H64.3V126C64.3 130.5 68 134.2 72.5 134.2C77 134.2 80.7 130.5 80.7 126V117.8H86.5V123.4C86.5 127.8 90.1 131.4 94.5 131.4H138.6C143 131.4 146.6 127.8 146.6 123.4V117.8H153.4V126C153.4 130.5 157.1 134.2 161.6 134.2C166.1 134.2 169.8 130.5 169.8 126V117.8H214.3L214.8 108.1H9.00003L9.50003 117.8Z"
        fill="#99BDC6"
      />
      <path
        d="M196.9 179.5H27C17.9 179.5 10.5 172.4 10 163.4L7.10004 107.1C7.10004 106.6 7.30004 106.1 7.60004 105.7C7.90004 105.3 8.40002 105.1 8.90002 105.1H214.8C215.3 105.1 215.8 105.3 216.1 105.7C216.4 106.1 216.6 106.6 216.6 107.1L213.7 163.4C213.4 172.4 206 179.5 196.9 179.5ZM10.9 108.8L13.7 163.2C14.1 170.3 19.9 175.9 27 175.9H196.9C204 175.9 209.9 170.3 210.2 163.2L213 108.8H10.9Z"
        fill="#3F5765"
      />
      <path
        d="M164.8 88V79.8C164.8 75.3 161.1 71.6 156.6 71.6C152.1 71.6 148.4 75.3 148.4 79.8V88H75.7V79.8C75.7 75.3 72 71.6 67.5 71.6C63 71.6 59.3 75.3 59.3 79.8V88H3.00003V99.8H221.3V88H164.8Z"
        fill="#F59390"
      />
      <path
        d="M221.1 101.6H2.80002C1.80002 101.6 1.00003 100.8 1.00003 99.8V88C1.00003 87 1.80002 86.2 2.80002 86.2H57.3V79.8C57.3 74.3 61.8 69.7 67.4 69.7C72.9 69.7 77.5 74.2 77.5 79.8V86.2H146.6V79.8C146.6 74.3 151.1 69.7 156.7 69.7C162.2 69.7 166.8 74.2 166.8 79.8V86.2H221.3C222.3 86.2 223.1 87 223.1 88V99.8C223 100.8 222.1 101.6 221.1 101.6ZM4.60004 98H219.3V89.9H164.8C163.8 89.9 163 89.1 163 88.1V79.9C163 76.4 160.1 73.5 156.6 73.5C153.1 73.5 150.2 76.4 150.2 79.9V88.1C150.2 89.1 149.4 89.9 148.4 89.9H75.7C74.7 89.9 73.9 89.1 73.9 88.1V79.9C73.9 76.4 71 73.5 67.5 73.5C64 73.5 61.1 76.4 61.1 79.9V88.1C61.1 89.1 60.3 89.9 59.3 89.9H4.80002V98H4.60004Z"
        fill="#3F5765"
      />
      <path
        d="M2.80002 99.8V111.6H59.1V119.8C59.1 124.3 62.8 128 67.3 128C71.8 128 75.5 124.3 75.5 119.8V111.6H148.2V119.8C148.2 124.3 151.9 128 156.4 128C160.9 128 164.6 124.3 164.6 119.8V111.6H220.9V99.8H2.80002Z"
        fill="#B4D8E3"
      />
      <path
        d="M156.6 129.8C151.1 129.8 146.5 125.3 146.5 119.7V113.3H77.4V119.7C77.4 125.2 72.9 129.8 67.3 129.8C61.8 129.8 57.2 125.3 57.2 119.7V113.3H2.70004C1.70004 113.3 0.900024 112.5 0.900024 111.5V99.7C0.900024 98.7 1.70004 97.9 2.70004 97.9H221C222 97.9 222.8 98.7 222.8 99.7V111.5C222.8 112.5 222 113.3 221 113.3H166.5V119.7C166.6 125.3 162.1 129.8 156.6 129.8ZM75.6 109.8H148.3C149.3 109.8 150.1 110.6 150.1 111.6V119.8C150.1 123.3 153 126.2 156.5 126.2C160 126.2 162.9 123.3 162.9 119.8V111.6C162.9 110.6 163.7 109.8 164.7 109.8H219.2V101.7H4.60004V109.8H59.1C60.1 109.8 60.9 110.6 60.9 111.6V119.8C60.9 123.3 63.8 126.2 67.3 126.2C70.8 126.2 73.7 123.3 73.7 119.8V111.6C73.8 110.6 74.6 109.8 75.6 109.8Z"
        fill="#3F5765"
      />
      <path
        d="M134 125.3H89.9C85.5 125.3 81.9 121.7 81.9 117.3V84H142V117.3C142 121.7 138.4 125.3 134 125.3Z"
        fill="#F59390"
      />
      <path
        d="M134 118.3H89.9C85.5 118.3 81.9 114.7 81.9 110.3V117.3C81.9 121.7 85.5 125.3 89.9 125.3H134C138.4 125.3 142 121.7 142 117.3V110.3C142 114.7 138.4 118.3 134 118.3Z"
        fill="#CC6D6D"
      />
      <path
        d="M134 127.1H89.9C84.5 127.1 80 122.7 80 117.2V83.9C80 82.9 80.8 82.1 81.8 82.1H142C143 82.1 143.8 82.9 143.8 83.9V117.2C143.9 122.7 139.4 127.1 134 127.1ZM83.7 85.8V117.3C83.7 120.7 86.5 123.5 89.9 123.5H134C137.4 123.5 140.2 120.7 140.2 117.3V85.8H83.7Z"
        fill="#3F5765"
      />
      <path d="M125.6 99.8H98.3V111.6H125.6V99.8Z" fill="#B4D8E3" />
      <path
        d="M125.6 113.4H98.3C97.3 113.4 96.5 112.6 96.5 111.6V99.8C96.5 98.8 97.3 98 98.3 98H125.6C126.6 98 127.4 98.8 127.4 99.8V111.6C127.5 112.6 126.6 113.4 125.6 113.4ZM100.1 109.8H123.8V101.7H100.1V109.8V109.8Z"
        fill="#3F5765"
      />
    </svg>
  )
}

export default FishingBox
3
