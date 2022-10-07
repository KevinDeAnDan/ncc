import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/img/logo.png'
import img1 from '../../assets/img/1.png'
import img2 from '../../assets/img/2.png'
import img3 from '../../assets/img/3.png'



const cx = classNames.bind(styles);

function Content() {
    return <>
        <div className={cx('wapper')}>
            <img className={cx('logo')} src={logo} alt={logo}/>
            <div className={cx('text')}>
                <h4 className={cx('text__h3')}>
                    Lorem ipsum dolor sit asmet?
                </h4>
                <span className={cx('text__span')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                </span>
            </div>
            <div className={cx('items')}>
                <div className={cx('item')}>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <div className={cx('children')}>
                        <img src={img1} alt={img1}/>
                        <span className={cx('desc1__span')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at</span>
                    </div>
                    <p className={cx('desc2__span')}>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
                <div className={cx('item')}>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <div className={cx('children')}>
                        <img src={img2} alt={img2}/>
                        <span className={cx('desc1__span')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at</span>
                    </div>
                    <p className={cx('desc2__span')}>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
                <div className={cx('item')}>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <div className={cx('children')}>
                        <img src={img3} alt={img3}/>
                        <span className={cx('desc1__span')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at</span>
                    </div>
                    <p className={cx('desc2__span')}>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
            </div>
            <div className={cx('footer')}>Copyright © 2021</div>
        </div>
    </>
}

export default Content;