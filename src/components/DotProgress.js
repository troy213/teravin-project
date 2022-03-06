import { ReactComponent as CheckMark } from '../assets/checkmark.svg'
import { useSelector } from 'react-redux'
import './DotProgress.css'

const DotProgress = () => {
  const currentFormPosition = useSelector(
    (state) => state.form.currentFormPosition
  )

  return (
    <div className='dot-progress-container'>
      <h3>Form Submission</h3>

      <ul className='progress-bar'>
        <li
          className={`progress-bar__step${
            currentFormPosition === 1
              ? ' is-current'
              : currentFormPosition > 1
              ? ' is-complete'
              : ''
          }`}
        >
          <CheckMark
            className='progress-bar__icon'
            style={{ fill: currentFormPosition !== 1 && 'white' }}
          />
          <span className='progress-bar__step-label'>Data Personal</span>
        </li>
        <li
          className={`progress-bar__step${
            currentFormPosition === 2
              ? ' is-current'
              : currentFormPosition > 2
              ? ' is-complete'
              : ''
          }`}
        >
          <CheckMark
            className='progress-bar__icon'
            style={{ fill: currentFormPosition !== 2 && 'white' }}
          />
          <span className='progress-bar__step-label'>Riwayat Pendidikan</span>
        </li>
        <li
          className={`progress-bar__step${
            currentFormPosition === 3
              ? ' is-current'
              : currentFormPosition > 3
              ? ' is-complete'
              : ''
          }`}
        >
          <CheckMark
            className='progress-bar__icon'
            style={{ fill: currentFormPosition !== 3 && 'white' }}
          />
          <span className='progress-bar__step-label'>Pengalaman Kerja</span>
        </li>
        <li
          className={`progress-bar__step${
            currentFormPosition === 4
              ? ' is-current'
              : currentFormPosition > 4
              ? ' is-complete'
              : ''
          }`}
        >
          <CheckMark
            className='progress-bar__icon'
            style={{ fill: currentFormPosition !== 4 && 'white' }}
          />
          <span className='progress-bar__step-label'>Keahlian</span>
        </li>
      </ul>
    </div>
  )
}

export default DotProgress
