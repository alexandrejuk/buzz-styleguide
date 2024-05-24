import React from 'react';
import PropTypes from "prop-types"

import Add from './Add'
import ArrowGlyphDown from './ArrowGlyphDown'
import ArrowOutlineLeft from './ArrowOutlineLeft'
import ArrowOutlineRight from './ArrowOutlineRight'
import Award from './Award'
import Bridge from './Bridge'
import Bulb from './Bulb'
import Call from './Call'
import Check from './Check'
import CirclePlus from './CirclePlus'
import Club from './Club'
import Coffee from './Coffee'
import Contacts from './Contacts'
import Direction from './Direction'
import Distance from './Distance'
import Exchange from './Exchange'
import Filter from './Filter'
import Hotel from './Hotel'
import Loading from './Loading'
import Location from './Location'
import Message from './Message'
import Moisture from './Moisture'
import Money from './Money'
import MoneyOff from './MoneyOff'
import More from './More'
import Museum from './Museum'
import Next from './Next'
import Park from './Park'
import Photo from './Photo'
import Rainy from './Rainy'
import Remove from './Remove'
import Reservation from './Reservation'
import Restaurant from './Restaurant'
import Search from './Search'
import Send from './Send'
import Stadium from './Stadium'
import Subtract from './Subtract'
import Time from './Time'
import Trash from './Trash'
import Trending from './Trending'
import Upload from './Upload'
import Windy from './Windy'

/**
 * Icon Component
 */
const Icon = ({
  name,
  height,
  width,
  color,
}) =>  {
  const iconList = {
    add: Add,
    arrowGlyphDown: ArrowGlyphDown,
    arrowOutlineLeft: ArrowOutlineLeft,
    arrowOutlineRight: ArrowOutlineRight,
    award: Award,
    bridge: Bridge,
    bulb: Bulb,
    call: Call,
    check: Check,
    CirclePlus: CirclePlus,
    club: Club,
    coffee: Coffee,
    contacts: Contacts,
    direction: Direction,
    distance: Distance,
    exchange: Exchange,
    filter: Filter,
    hotel: Hotel,
    loading: Loading,
    location: Location,
    message: Message,
    moisture: Moisture,
    money: Money,
    moneyOff: MoneyOff,
    more: More,
    museum: Museum,
    next: Next,
    park: Park,
    photo: Photo,
    rainy: Rainy,
    remove: Remove,
    reservation: Reservation,
    restaurant: Restaurant,
    search: Search,
    send: Send,
    stadium: Stadium,
    subtract: Subtract,
    time: Time,
    trash: Trash,
    trending: Trending,
    upload: Upload,
    windy: Windy,
  }

  const IconComponent = iconList[name]
  return (
    <IconComponent
      height={height}
      width={width}
      color={color}
    />
  )
}

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.string.isRequired,
  /** Icon width */
  width: PropTypes.number,
  /** Icon height */
  height: PropTypes.number,
  /** Icon color */
  color: PropTypes.string,
};

export default Icon;
