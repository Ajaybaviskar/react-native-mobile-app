
// const DEFAULT_STATUS = TASK_STATUS.UNCOMPLETED;
// function AddTask({setTask, navigation}) {
//   const [title, SetTitle] = useState(false);
//   const [deadLine, SetDeadLine] = useState(new Date());

//   const form = {
//     title,
//     SetTitle,
//     deadLine,
//     SetDeadLine,
//     starTime,
//     SetStartTime,
//     endTime,
//     SetEndTime,
//     remind,
//     SetRemind,
//     repeat,
//     SetRepeat,
//   };

//   const handlerClickAddTask = () => {
//     const data = {
//       status: DEFAULT_STATUS,
//       title,
//       id: CreateUID(),
//       //   deadLine,
//       //   starTime,
//       //   endTime,
//       remind,
//       repeat,
//     };
//     setTask(data);
//     navigation.goBack();
//   };

//   return (
//     <Index
//       REPEAT_DATA={REPEAT_DATA}
//       REMINDER_DATA={REMINDER_DATA}
//       form={form}
//       handlerClickAddTask={handlerClickAddTask}
//     />
//   );
// }
// AddTask.propTypes = {
//   setTask: PropTypes.func,
//   navigation: PropTypes.func,
// };
// const mapDispatchToProps = {setTask};

// export default connect(null, mapDispatchToProps)(AddTask);
