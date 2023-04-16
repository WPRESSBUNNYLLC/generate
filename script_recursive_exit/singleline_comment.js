
/*
 determines when ending a single line comment
*/

var update_function_and_update_data = require('../data');

var data_ = '';
var data_index_ = 0; 
var in_function_ = false;
var in_function_build_string_ = '';
var line_number_ = 0;

function singleline(data_index, in_function, line_number) { 
 data_ = update_function_and_update_data.data;
 data_index_ = data_index;
 in_function_ = in_function;
 in_function_build_string_ = '';
 line_number_ = line_number;
 return recurse(data_index_);
}

function recurse(data_index_) { 

 if(data_index_ > data_.length) {
  return {
   data_index: data_index_, 
   line_number: line_number_,
   build_string: in_function_build_string_,
  }
 }

 if(in_function_ === true) { 
  in_function_build_string_ += data_.charAt(data_index_);
 }

 if(data_.charAt(data_index_) === '\n') { 
  data_index_ = data_index_ + 1; 
  line_number_ = line_number_ + 1;
  return {
   data_index: data_index_, 
   line_number: line_number_,
   build_string: in_function_build_string_,
  }
 }

 data_index_ = data_index_ + 1; 
 return recurse(data_index_);

}

module.exports = singleline;